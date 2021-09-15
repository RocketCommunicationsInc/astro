import { FunctionalComponent, h } from '@stencil/core'

interface MonitoringLabelProps {
    label?: string
    sublabel?: string
}

const MonitoringLabel: FunctionalComponent<MonitoringLabelProps> = ({
    label,
    sublabel,
}) => (
    <div class="rux-advanced-status__label">
        {label}
        <span
            class={`rux-advanced-status__sublabel ${
                !sublabel ? 'rux-advanced-status__hidden' : ''
            }`}
        >
            {sublabel}
        </span>
    </div>
)

export default MonitoringLabel
