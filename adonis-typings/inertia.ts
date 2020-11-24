/**
 * adonis-typings/inertia
 * adonisjs-inertia
 *
 * Created by Fineas Gavre on 24/11/2020.
 *
 * Copyright and licencing information is available
 * in the LICENSE file that was distributed
 * with this source code.
 *
 * 2020 - ELYION TECHNOLOGIES
 */

declare module '@ioc:Elyion/Inertia' {
	/**
	 * Interface for the Inertia configuration.
	 */
	export interface InertiaConfig {
		mainView: string
	}

	/**
	 * Interface for the Inertia HttpContext.
	 */
	export interface InertiaContract {
		handle(component: string, props: any, edgeParameters: any | undefined): void
		isAjaxRequest(): boolean
		hasVersionChanged(): boolean
		forceReloadIfNeeded(): void
		transformRedirectsIfNeeded(): void
	}
}
