/**
 * context
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

declare module '@ioc:Adonis/Core/HttpContext' {
	import { InertiaContract } from '@ioc:Elyion/Inertia'

	interface HttpSessionContract {
		inertia: InertiaContract
	}
}
