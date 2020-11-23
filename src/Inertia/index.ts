/**
 * Inertia
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

/// <reference path="../../adonis-typings/inertia.ts" />

import { InertiaConfig, InertiaContract } from '@ioc:Elyion/Inertia'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import he from 'he'

export default class Inertia implements InertiaContract {
    private static readonly HEADERS = {
        INERTIA: 'X-Inertia',
        LOCATION: 'X-Inertia-Location',
        VERSION: 'X-Inertia-Version'
    }

    constructor(protected readonly context: HttpContextContract, protected readonly config: InertiaConfig) {}

    private isAjaxRequest() {
        return this.context.request.header(Inertia.HEADERS.INERTIA) !== undefined
    }

    handle(component: string, props: any, edgeParameters: any) {
        const { request, response, view } = this.context
        const { mainView } = this.config

        const inertiaPage = {
            component,
            props,
            url: request.url()
        }

        if (this.isAjaxRequest()) {
            response.header('Vary', 'Accept')
            response.header(Inertia.HEADERS.INERTIA, 'true')
            response.json(inertiaPage)
            return
        }

        const pageString = JSON.stringify(inertiaPage, null, 0)
        const renderedView = view.render(mainView, {
            pageData: he.escape(pageString),
            ...edgeParameters
        })

        response.send(renderedView)
    }
}
