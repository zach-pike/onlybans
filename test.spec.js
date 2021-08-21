const fetch = require("node-fetch")

it("Works", async () => {
    let username = "Hello"

    let req = await fetch("http://localhost:1337/ban/" + username)

    expect(await req.text()).toBe(`${username} has been banned!`)
})

it("Works but 2", async () => {
    let req = await fetch("http://localhost:1337/ban/")

    expect(req.ok).toBeFalsy()
})