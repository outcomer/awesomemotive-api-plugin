<?php
/**
 * David_Ev_Asm_Api_Client
 *
 * @package DavidEvAsmApiPlugin
 */

declare(strict_types = 1);

namespace DavidEv\Asm\ApiPlugin\Includes\Storage;

use DavidEv\Asm\ApiPlugin\Includes\Storage\Interfaces\{
	David_Ev_Asm_Org_Data_Provider_Interface as Data_Provider_Interface,
	David_Ev_Asm_Org_Cache_Interface as Cache_Provider_Interface,
};

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;

/**
 * API fetcher.
 *
 * @package DavidEvAsmApiPlugin
 */
class David_Ev_Asm_Org_Api_Client implements Data_Provider_Interface {

	/**
	 * Base URL.
	 *
	 * @var string
	 */
	private string $host = 'https://miusage.com/v1';

	/**
	 * Cache handler.
	 *
	 * @var Cache_Provider_Interface
	 */
	private Cache_Provider_Interface $cache_provider;

	/**
	 * David_Ev_Asm_Repository Constructor.
	 *
	 * @param Cache_Provider_Interface $cache_provider As it said.
	 */
	public function __construct( Cache_Provider_Interface $cache_provider ) {
		$this->cache_provider = $cache_provider;
	}

	/**
	 * API endpoint fetcher.
	 *
	 * @param bool $no_cache Whether to update the cache.
	 *
	 * @throws Exception On any unexpected response.
	 *
	 * @return object
	 */
	public function fetch_persons( bool $no_cache = false ): object {

		if ( $no_cache ) {
			$this->cache_provider->persons_delete();
		}

		$cache = $this->cache_provider->persons_get();

		if ( false !== $cache ) {
			return $cache;
		}

		$endpoint = "{$this->host}/challenge/1/";
		$response = wp_remote_get( $endpoint );

		if ( ! is_wp_error( $response ) ) {
			$status = wp_remote_retrieve_response_code( $response );

			if ( 200 === $status ) {
				$body = wp_remote_retrieve_body( $response );
				if ( $this->is_json( $body ) ) {
					$this->cache_provider->persons_put( $body );
					return json_decode( $body );
				}
			}
		}

		throw new Exception( sprintf( 'Unexpected response from host %1$s: %2$s', $endpoint, $response->get_error_message() ) );
	}

	/**
	 * Check if variable is json by its content.
	 *
	 * @param mixed $string Any data to validate.
	 *
	 * @return boolean
	 */
	private function is_json( mixed $string ): bool {
		$r = json_decode( $string );

		if ( json_last_error() === JSON_ERROR_NONE && $string !== $r ) {
			$return = true;
		} else {
			$return = false;
		}

		return $return;
	}
}
