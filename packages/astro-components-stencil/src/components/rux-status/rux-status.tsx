import { Prop, Component, Host, h, Watch } from '@stencil/core';

@Component({
    tag: 'rux-status',
    styleUrl: 'rux-status.scss',
    shadow: true,
})

export class RuxStatus {
    @Prop({reflect: true}) status: string;

    @Watch('status')
    validateStatus(newValue: string) {
        const statusTypes = {
            off: true,
            standby: true,
            normal: true,
            caution: true,
            serious: true,
            critical: true,
        }
        if (!statusTypes[newValue]) { throw new Error('valid status required') }
    }

    render() {
        return (
            <Host
                status={this.status}
            />
            // <div>heyoooo</div>
        )
    }
}
