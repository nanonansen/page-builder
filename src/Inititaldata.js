const initialData = {
    blocks: [
        {
            id: 1,
            name: "image",
            content: [
                {
                    url:
                        "https://c.static-nike.com/a/images/f_auto/w_1920,c_limit/b310c2c3-1164-4b2f-a52f-5d98e8efef7c/nikecom-homepage.jpg"
                }
            ],
            styles: { backgroundColor: "#ffffff" }
        },
        {
            id: 2,
            name: "headline",
            content: [
                {
                    text: "This is a Headline"
                }
            ],
            styles: { backgroundColor: "#ffffff", color: "#000000" }
        }
    ],

    canvas: {
        blocks: [
            {
                id: 0,
                name: "image",
                content: [
                    {
                        url:
                            "https://c.static-nike.com/a/images/f_auto/w_1920,c_limit/2ab9eb31-1259-4e68-a3d9-c87ec2a9c021/nikecom-homepage.jpg"
                    }
                ],
                styles: { backgroundColor: "#ffffff" }
            }
        ]
    }
};

export default initialData;
