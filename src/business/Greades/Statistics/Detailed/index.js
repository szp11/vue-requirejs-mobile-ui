define(function () {
    return function module(moduleName) {
        return {
            data: function () {
                return {
                    active: 'tab-container1',
                    menuState: false,
                    loading: false,
                    loadingTop: false,
                    loadingTop2: false,
                    list: [{
                        date: "2017-08-05",
                        evalute: "优",
                        css: "great",
                        icon: "../../../../assets/system/datelist_03.png"
                    },
                    {
                        date: "2017-08-05",
                        evalute: "优",
                        css: "great",
                        icon: "../../../../assets/system/datelist_03.png"
                    },
                    {
                        date: "2017-08-05",
                        evalute: "优",
                        css: "great",
                        icon: "../../../../assets/system/datelist_03.png"
                    }
                    ],
                    list2: [{
                        date: "2017-08-05",
                        evalute: "100",
                        icon: "../../../../assets/system/datelist_03.png"
                    },
                    {
                        date: "2017-08-05",
                        evalute: "100",
                        icon: "../../../../assets/system/datelist_03.png"
                    },
                    {
                        date: "2017-08-05",
                        evalute: "100",
                        icon: "../../../../assets/system/datelist_03.png"
                    }
                    ]
                }
            },
            methods: {
                loadMore: function () {
                    this.loading = true;
                    setTimeout(function () {

                        this.loading = false;
                    }.bind(this), 2500);
                },
                loadTop: function () {
                    setTimeout(function () {
                        for (var i = 0; i < 2; i++) {
                            this.list.push({
                                date: "2017-08-05",
                                evalute: "优",
                                css: "great",
                                icon: "../../../../assets/system/datelist_03.png"
                            })
                        }
                        this.$refs.loadmoretop.onTopLoaded();
                    }.bind(this), 2500);
                },
                loadTop2: function () {
                    setTimeout(function () {
                        for (var i = 0; i < 2; i++) {
                            this.list2.push({
                                date: "2017-08-05",
                                evalute: "100",
                                icon: "../../../../assets/system/datelist_03.png"
                            })
                        }
                        this.$refs.loadmoretop.onTopLoaded();
                    }.bind(this), 2500);
                },

                loadBottom: function () {
                    setTimeout(function () {

                        this.$refs.loadmorebottom.onBottomLoaded();
                    }.bind(this), 2500);
                },
                menuChange: function () {
                    this.menuState = !this.menuState;
                }

            }
        } //
    }
})