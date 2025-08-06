import { expect, browser, $ } from "@wdio/globals";

describe("ADx Smoke", () => {
  it("should login with valid credentials", async () => {
    await browser.url(`http://localhost:48752/`);

    await $('input[type="email"]').setValue("user@example.com");
    await $('input[type="password"]').setValue("SuperSecretPassword!");
    await $('button[type="submit"]').click();

    await expect($("h3*=Projects")).toBeExisting();
    await expect($("h3*=Projects")).toHaveText("Projects");
    await $("button*=Logout").click();
    await expect($("h1*=Successfully Logged Out")).toBeExisting();
    await expect($("h1*=Successfully Logged Out")).toHaveText(
      "Successfully Logged Out"
    );
  });
});
