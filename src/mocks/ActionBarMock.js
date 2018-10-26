const actionBarMock = [
    {
        title: "IWatch",
        url: "www.apple.com/IWatch",
        active: false,
        dropDownItems: ["IPod 1", "IPod 2", "IPod 3"]
    },
    {
        title: "IPod",
        url: "www.apple.com/Ipod",
        active: true,
        dropDownItems: ["IPod 1", "IPod 2", "IPod 3"]
    },
    {
        title: "Iphone",
        url: "www.apple.com/Iphone",
        active: false,
        dropDownItems: ["Iphone 1", "Iphone 2", "Iphone 3"]
    }
];


for (let i = 0; i < 50; i++) {
    actionBarMock.push({
        title: "Iphone" + i,
        url: "www.apple.com/Iphone" + i,
        active: false,
        dropDownItems: ["Iphone 1", "Iphone 2", "Iphone 3"]
    })
}
export default actionBarMock;