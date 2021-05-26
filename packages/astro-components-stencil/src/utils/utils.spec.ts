import { format, collapseNotifications } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});

describe('collapses notifications', () => {
  it('does not collapse 3 digit numbers', () => {
    expect(collapseNotification(198)).toBe('198')
  })

  it('properly collapses 6-digit numbers', () => {
    expect(collapseNotification(102894)).toBe('102K')
  })

  it('properly collapses 8-digit numbers', () => {
    expect(collapseNotification(25684103)).toBe('25.7M')
  })

  it('properly collapses 10-digit numbers', () => {
    expect(collapseNotification(3038953951)).toBe('3.0B')
  })

  it('accounts for extremely large numbers', () => {
    expect(collapseNotification(20923509825234)).toBe('∞')
  })
})