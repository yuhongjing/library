---
title: PHP实现
---

# 迭代器模式-JS

* [电台](#电台)

## 电台

电台有很多个频道，我们通过上一个和下一个按钮，来遍历电台的所有频道。

```js
class RadioStation {
    constructor(frequency) {
        this.frequency = frequency;
    }

    getFrequency() {
        return this.frequency;
    }
}

class StationList {
    constructor() {
        this.stations = [];
    }

    addStation(station) {
        this.stations.push(station);
    }

    removeStation(toRemove) {
        const toRemoveFrequency = toRemove.getFrequency();
        this.stations = this.stations.filter(station => {
            return station.getFrequency() !== toRemoveFrequency;
        });
    }
}

// 客户端
const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.stations.forEach(station => console.log(station.getFrequency()));

stationList.removeStation(new RadioStation(89));
// 89
// 101
// 102
// 103.2
```

