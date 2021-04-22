---
description: Usage hints for DietPi
title: Usage hints / HowTo
---

# Usage hints / HowTo

This chapter contains several documents describing the usage of DietPi.

## How to use the logging mechanism

DietPi uses systemd as system and service manager, which includes the `systemd-journald` logging daemon.
An additional syslog daemon, like `rsyslog`, is not required and hence not pre-installed on DietPi. The basic command to access `systemd-journald` logs is

```sh
journalctl [options]
```

<font size="+2">Logging basic output</font>

Using simply `journalctl` prints out all logging messages stored in the system.  
Each line shows:  
<timestamp\> <hostname\> <process name\>[PID]: <log message\>

The following screenshot shows the logging of the boot process (of a DietPi virtual machine). You can see the various fields (timestamp, hostname, etc.) in the log entries:

![DietPi logging - journalctl screenshot](assets/images/dietpi-howto-logging1.png){: width="640" height="300" loading="lazy"}

<font size="+2">Logging output filtering options</font>

Some of the options are described in the following table.  
More detailed options may be studied in the [man pages of `journalctl`](https://man7.org/linux/man-pages/man1/journalctl.1.html).

| Command | Remark |
| - | - |
| `journalctl -u UNITNAME` <br>(`--unit UNITNAME`) | Displays messages of the given unit |
| `journalctl _PID=<process_id>` | Displays messages of process with PID equals to <process_id\> |
| `journalctl -r` <br>(`--reverse`) | Displays list in reverse order, i.e. newest messages first |
| `journalctl -f` <br>(`--follow`) | Displays the tail of the log message list and shows new entries *live* |
| `journalctl -b` <br>(`--boot`) | Displays messages since the last boot (i.e. no older messages). See also option `--list-boots` |
| `journalctl -k` <br>(`--dmesg`) | Displays kernel messages |
| `journalctl -p PRIORITY` <br>(--priority PRIORITY) | Displays messages with the given priority. PRIORITY may be `merg`, `alert`, `crit`, `err`, `warning`, `notice`, `info` and `debug`. Also numbers as PRIORITY are possible |
| `journalctl -o verbose` | Displays additional meta data |
| `journalctl --disk-usage` | Displays the amount of disk space used by the logging messages |
| `journalctl --no-pager | grep <filter>` | Filters log messages (filtering with `grep`) |

In the software package descriptions, sometimes there is a tab called "View Logs". This gives a `jounalctl -u UNITNAME` command example how to filter the logging messages of a given software package.  
Example: See [tab "View logs"](../software/dns_servers/#unbound) of *Unbound*. It gives: `journalctl -u unbound`.

<font size="+2">Logging options</font>

As described in the chapter [Log system choices](../software/log_system/), DietPi has several options how the logging system operates. Especially the log history, the memory consumption and the frequency of SD card write accesses varies.  
Find and set the options which fit to your demands, it is also an option to change the logging to examine some problems.

| Log option | location | log depth | log persistence |
| - | - | - | - |
| DietPi-RAMlog #1 | RAM | last hour | volatile, i.e. not saved to disk |
| DietPi-RAMlog #2 | RAM | long term | stored, i.e. hourly saved to disk |
| Full logging | disk | long term | stored, i.e. immediately saved to disk <br>(with Rsyslog and Logrotate)|
