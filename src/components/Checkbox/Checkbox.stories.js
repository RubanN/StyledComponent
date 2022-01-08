import Checkboxs from './index'

const story = {
    title: 'Components/Checkboxs',
    component: Checkboxs,
    argTypes: {
        label: { control: 'text' }
    }
}

export default story

const Template = args => {
    return <Checkboxs {...args} />
}

export const Primary = Template.bind({})
