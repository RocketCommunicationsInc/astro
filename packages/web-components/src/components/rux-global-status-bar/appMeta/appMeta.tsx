import { FunctionalComponent, h } from '@stencil/core'

interface AppMetaProps {
    domain?: string
    name?: string
    version?: string
}

export const AppMeta: FunctionalComponent<AppMetaProps> = (
    { domain, name, version },
    children
) => (
    <div class="app-meta" part="app-meta">
        <div class="app-info-wrapper">
            {domain && <h1 class="app-domain">{domain}</h1>}
            {name && <h1 class="app-name">{name}</h1>}
            {version && <span class="app-version">{version}</span>}
        </div>
        {children}
    </div>
)
