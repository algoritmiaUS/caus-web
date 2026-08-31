---
title: "{{ with .File }}{{ $d := path.Base (path.Dir .Path) }}{{ $slug := replaceRE `^[0-9]{4}-[0-9]{2}-` `` $d }}{{ if ne $d "." }}{{ replace $slug "-" " " | title }}{{ else }}{{ replace $.Name "-" " " | title }}{{ end }}{{ else }}{{ replace .Name "-" " " | title }}{{ end }}"
date: {{ .Date }}
featured_image: images/featured/talks.webp
summary: ""
description: ""
author: Administradores CAUS
categories: events
tags: ['events', 'talks']
---

<!--
tags válidos (data/taxonomies.yaml):
- talks:          ['events', 'talks']                  + categories: events
- math-series:    ['events', 'talks', 'math-series']    + categories: events
- complicaus:     ['events', 'complicaus', 'competitions'] + categories: events
- adabyron:       ['events', 'adabyron', 'competitions']   + categories: events
- elections:      ['events', 'elections']               + categories: events
- general/news:   ['news']                              + categories: news
featured_image: images/featured/<nombre>.webp  (ver assets/images/featured/)
-->
