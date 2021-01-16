import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import { Page, PageProps } from "./Page"

export default {
  title: "Example/Page",
  component: Page
} as Meta

const Template: Story<PageProps> = (args) => <Page {...args} />

export const AppTitle1 = Template.bind({})
AppTitle1.args = {
  title: "Title 1"
}

export const AppTitle2 = Template.bind({})
AppTitle2.args = {
  title: "Title 2"
}
