const stack = {
  children: [
    {
      component: {
        id: 'component1', // Optional, Auto generated if empty
        name: 'Your registered component name',
        options: {
          
        },
        passProps: {
          text: 'This text will be available in your component.props'
        }
      }
    },
    {
      component: {}
    }
  ],
  options: {
    topBar: {
      visible: true,
      leftButtons: [{ id: 'back', icon: { uri: 'back' } }],
      rightButtons: [{ id: 'search', icon: { uri: 'search' } }]
    }
  }
};
