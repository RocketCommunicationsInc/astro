import { collapseNotifications } from './MonitoringBadge'

describe('collapses notifications', () => {
    it('does not collapse 3 digit numbers', () => {
        expect(collapseNotifications(198)).toBe('198')
    })

    it('properly collapses 6-digit numbers', () => {
        expect(collapseNotifications(102894)).toBe('102K')
    })

    it('properly collapses 8-digit numbers', () => {
        expect(collapseNotifications(25684103)).toBe('25.7M')
    })

    it('properly collapses 10-digit numbers', () => {
        expect(collapseNotifications(3038953951)).toBe('3.0B')
    })

    it('accounts for extremely large numbers', () => {
        expect(collapseNotifications(20923509825234)).toBe('∞')
    })
})
