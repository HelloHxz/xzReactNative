module.exports = {
    type: "pageview",
    drawlayout: {
        key: "drawlayout",
        disabledTouch: false,
    },
    style: {
        backgroundColor: "rgb(243, 243, 243)"
    },
    root: [
        "viewpager",
        "firstRepeat"
    ],
    components: {

        viewpager: {
            type: "viewpager",
            style: {
                flex:1
            },
            selectedKey: "home",
            pageOrder: [
                "home",
                "my",
                "app",
                "setting"
            ]
        },
        firstRepeat: {
            type: "repeat",
            selectedMode: "s",
            selectedIndex: 0,
            items: [
                {
                    label: "主页",
                    icon: "icofont_f01f",
                    color: "red",
                    "page": "home"
                },
                {
                    label: "我的",
                    icon: "icofont_f0ca",
                    color: "yellow",
                    "page": "my"
                },
                {
                    label: "应用",
                    icon: "icofont_f0c0",
                    color: "yellow",
                    "page": "app"
                },
                {
                    label: "设置",
                    icon: "icofont_f0c7",
                    color: "green",
                    "page": "setting"
                }
            ],
            style: {
                flexDirection: "row",
                borderTopWidth: 1,
                borderTopColor: "#eee",
                backgroundColor:"#fff"
            },
            itemStyle: {
                flex: 1,
                height: 50,
                backgroundColor: "transparent",

                justifyContent: "center",
                alignItems: "center"
            },
            selectedStyle: {
                backgroundColor: "red"
            },
            root: [
                "repeat_row_icon"
            ]
        },
        repeat_row_icon: {
            type: "icon",
            textStyle: {
                color: "#666",
                fontSize: 12,
                ios_marginTop: 3,
                android_marginTop:-2
            },
            iconStyle: {
                color: "gray",
                fontSize: 23
            },
            textSelectedStyle: {
                color: "red"
            },
            iconSelectedStyle: {
                color: "red"
            },
            textPos: "bottom",
            icon_bind: "icon",
            text_bind: "label"
        }
    }
};
