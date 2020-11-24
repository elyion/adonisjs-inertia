/**
 * InertiaMiddleware
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
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class InertiaMiddleware {
	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
		const { inertia } = ctx
		await next()

		inertia.forceReloadIfNeeded()
		inertia.transformRedirectsIfNeeded()
	}
}
