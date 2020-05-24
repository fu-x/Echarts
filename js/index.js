// 左1柱状图
(function () {
  const myChart = echarts.init(document.querySelector('.bar .chart'));

  let option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: 8
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      },
      axisLine: {
        color: "rgba(255,255,255,.1)",
        width: 2
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '30%',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 右1柱状图
(function () {
  const myChart = echarts.init(document.querySelector('.bar2 .chart'));
  const barColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [{
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        },
        inverse: true,
      },
      {
        data: [702, 350, 610, 793, 664],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        },
        inverse: true,
      }
    ],
    series: [{
        name: '2011年',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          barBorderRadius: 20,
          color: function (el) {
            return barColor[el.dataIndex]
          }
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        },
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 左2折线图
(function () {
  // 数据
  const yearData = [{
      year: '2020', // 年份
      data: [ // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021', // 年份
      data: [ // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  const myChart = echarts.init(document.querySelector(".line .chart"));
  let option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: "10%"
    },
    // 设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      }
    },
    series: [{
        name: '新增粉丝',
        type: 'line',
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: '新增游客',
        type: 'line',
        smooth: true,
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
  const radios = document.querySelectorAll(".selectYear input[type=radio]");
  for (let el of radios) {
    el.addEventListener('change', (e) => {
      if (e.target.value === '2020') {
        option.series[0].data = yearData[0].data[0];
        option.series[1].data = yearData[0].data[1];
      } else {
        option.series[0].data = yearData[1].data[0];
        option.series[1].data = yearData[1].data[1];
      }
      myChart.setOption(option);
    })
  }
})();

//右2折线图
(function () {
  const myChart = echarts.init(document.querySelector('.line2 .chart'));
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 12
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
            }
          ], false),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
      },
      {
        name: '联盟广告',
        type: 'line',
        areaStyle: {},
        smooth: true,
        lineStyle: {
          color: "#00d887",
          width: 2
        },
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(0, 216, 135, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(0, 216, 135, 0.1)" // 渐变线的结束颜色
            }
          ], false),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();