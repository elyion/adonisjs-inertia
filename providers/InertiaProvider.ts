/**
 * InertiaProvider
 * adonisjs-inertia
 *
 * Created by Fineas Gavre on 23/11/2020.
 *
 * Copyright and licencing information is available
 * in the LICENSE file that was distributed
 * with this source code.
 *
 * 2020 - ELYION TECHNOLOGIES
 */

import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Inertia from '../src/Inertia'
import { InertiaMiddleware } from '../src/InertiaMiddleware'

export default class InertiaProvider {
	constructor(protected app: ApplicationContract) {}
	public static needsApplication = true

	public register(): void {
		this.app.container.singleton('Elyion/InertiaMiddleware', () => {
			return new InertiaMiddleware()
		})
	}

	public boot(): void {
		this.app.container.with(['Adonis/Core/HttpContext'], (HttpContext) => {
			const inertiaConfig = this.app.config.get('inertia', {})

			HttpContext.getter(
				'inertia',
				function inertia() {
					return new Inertia(this, inertiaConfig)
				},
				true
			)
		})
	}
}
