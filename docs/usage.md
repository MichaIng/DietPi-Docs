---
description: Usage hints for DietPi
title: Usage hints / HowTo
---

# Usage hints / HowTo

This chapter contains several documents describing the usage of DietPi.

## How to use the logging mechanism

DietPi uses the systemd based loggin (instead of using syslog). `journald` is the logging part.
The basic command to evaluate the systemd-journal is

```
journalctl [options]
```

Using simply `journalctl` prints out all logging messages stored in the system.  
Each line shows:  
<timestamp\> <hostname\> <process name\>[PID]: <log message\>

### xxx Screenshot einfügen

Some of the options:

- `journalctl -r` (`--reverse`): Displays list in reverse order, i.e. newest messages first
- `journalctl -f` (--follow): Displays the tail of the log message list and shows new entries *live*
- `journalctl -b` (--boot): Displays messages since the last boot (i.e. no older messages). See also option `--list-boots`.
- `journalctl -k` (--dmesg): Displays kernel messages
- `journalctl -u UNITNAME` (--unit UNITNAME): Displays kernel messages of the given unit
- `journalctl -p PRIORITY` (--priority PRIORITY): Displays messages with the given priority. PRIORITY may be `merg`, `alert`, `crit`, `err`, `warning`, `notice`, `info` and `debug`. Also numers as PRIORITY are possible
- `journalctl -o verbose`: Displays additional meta data
- `journalctl --disk-usage`: Displays the amount of disk space used by the logging messages
- `journalctl --no-pager | grep <filter>`: Filters log messages (filtering with `grep`)


More detailed options may be read in the man pages of `journalctl`.


### xxx

Verweis auf logging options (Bild?)

- Speicherort?
- Speicherdauer?
