const initialData = {
    blocks: [
        {
            id: 1,
            name: "image",
            content: [
                {
                    url:
                        "https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
                }
            ]
        },
        {
            id: 2,
            name: "headline",
            content: [
                {
                    text: "This is a Headline"
                }
            ]
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
                            "https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
                    }
                ]
            }
        ]
    }
};

export default initialData;
