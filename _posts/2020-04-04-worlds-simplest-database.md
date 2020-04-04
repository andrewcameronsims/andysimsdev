---
layout: post
title: "'The world's simplest database'"
---

![designing-data-intensive-applications](/assets/ddia.png)

I have been reading Martin Kleppman's manual **Designing Data-Intensive Applications**. As far as technical books go, this one is a real page turner. Despite having used both relational and document databases, this is my first glimpse under the hood into how they are actually implemented. Chapter 3 is all about the different ways in which storage and retrieval can be done, and Kleppman kicks things off with a bash script he calls 'the world's simplest database':

```bash
#!/bin/env bash

db_set() {
  echo "$1, $2" >> database
}

db_get() {
  grep "^$1," database | sed -e "s/^$1,//" | tail -n 1
}
```

This script loads two functions into the environment. `db_set` appends a new line to a file called `database` which contains the two arguments to the function separated by a comma (i.e., a key-value pair), and `db_get` retrieves the most recent value for an argument that is passed to it. This is an immutable database that implements three of the CRUD (Create, Read, Update, and Delete) operations on data. It creates, it reads, and it updates. It creates the first time it writes a new key to the file. It updates because you can overwrite an entry by appending its key with a new value to the end of the file. It does not delete because you cannot remove any lines once they are written.

This is called a *log* data structure, because it is like an application or system log where information is always written to the end of the file. This is such a simple example, and it made the explanation of the more complex parts of database storage and retrieval systems (indices, consolidation of redundant entries, etc.) very easy to understand in an intuitive way. It's made me want to try and implement a simple log-structured database to get my head around some of those more sophisticated mechanisms.
