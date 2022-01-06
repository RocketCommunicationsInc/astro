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
        <span part="monitoring-label">{label}</span>
        <span
            class={`rux-advanced-status__sublabel ${
                !sublabel ? 'rux-advanced-status__hidden' : ''
            }`}
            part="monitoring-sublabel"
        >
            {sublabel}
        </span>
    </div>
)

export default MonitoringLabel
