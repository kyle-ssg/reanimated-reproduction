import { waitForElementVisible } from "../util/helpers.cafe";

fixture`Homepage Tests`
    .page`http://localhost:3000/`;

test('Submit a Form', async () => {
    await waitForElementVisible("body")
});
