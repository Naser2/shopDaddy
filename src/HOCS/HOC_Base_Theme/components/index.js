import { Platform } from 'react-native';
import _ from 'lodash';
import headerTheme from './Header';
import contentTheme from './Content';
import bodyTheme from './Body';
import buttonTheme from './Button';
import titleTheme from './Title';
import inputGroupTheme from './InputGroup';
import inputTheme from './Input';
import badgeTheme from './Badge';
import checkBoxTheme from './CheckBox';
import cardTheme from './Card';
import rightTheme from './Right';
import leftTheme from './Left';
import containerTheme from './Container';
import radioTheme from './Radio';
import h3Theme from './H3';
import h2Theme from './H2';
import h1Theme from './H1';
import footerTheme from './Footer';
import footerTabTheme from './FooterTab';
import fabTheme from './Fab';
import itemTheme from './Item';
import labelTheme from './Label';
import textAreaTheme from './Textarea';
import textTheme from './Text';
import toastTheme from './Toast';
import tabTheme from './Tab';
import tabBarTheme from './TabBar';
import tabContainerTheme from './TabContainer';
import viewTheme from './View';
import tabHeadingTheme from './TabHeading';
import iconTheme from './Icon';
import segmentTheme from './Segment';
import spinnerTheme from './Spinner';
import cardItemTheme from './CardItem';
import listItemTheme from './ListItem';
import formTheme from './Form';
import separatorTheme from './Separator';
import variables from './../variables/platform';

export default () => {
  const theme = {
    variables,
    'shopDaddy.Left': {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start'
    },
    'shopDaddy.Right': {
      'shopDaddy.Button': {
        alignSelf: null
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end'
    },
    'shopDaddy.Body': {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center'
    },

    'shopDaddy.Header': {
      ...headerTheme(variables)
    },
    'shopDaddy.Title': {
      ...titleTheme(variables)
    },

    'shopDaddy.Body': {
      ...bodyTheme(variables)
    },

    'shopDaddy.Button': {
      ...buttonTheme(variables)
    },

    'shopDaddy.InputGroup': {
      ...inputGroupTheme(variables)
    },

    'shopDaddy.Input': {
      ...inputTheme(variables)
    },

    'shopDaddy.Badge': {
      ...badgeTheme(variables)
    },

    'shopDaddy.CheckBox': {
      ...checkBoxTheme(variables)
    },

    'shopDaddy.Radio': {
      ...radioTheme(variables)
    },

    'shopDaddy.Card': {
      ...cardTheme()
    },

    'shopDaddy.CardItem': {
      ...cardItemTheme(variables),
      '.cardBody': {
        padding: -5,
        'shopDaddy.Text': {
          marginTop: 5
        }
      },
      flexDirection: 'row',
      alignItems: 'center'
    },

    'shopDaddy.CardItem1': {
      ...cardItemTheme(variables)
    },

    'shopDaddy.Toast': {
      ...toastTheme(variables)
    },
    'shopDaddy.Left': {
      ...leftTheme(variables)
    },

    'shopDaddy.Right': {
      ...rightTheme(variables)
    },

    'shopDaddy.H1': {
      ...h1Theme(variables)
    },
    'shopDaddy.H2': {
      ...h2Theme(variables)
    },
    'shopDaddy.H3': {
      ...h3Theme(variables)
    },
    'shopDaddy.Form': {
      ...formTheme(variables)
    },

    'shopDaddy.Container': {
      ...containerTheme(variables)
    },
    'shopDaddy.Content': {
      ...contentTheme(variables)
    },

    'shopDaddy.Footer': {
      ...footerTheme(variables)
    },

    'shopDaddy.Tabs': {
      flex: 1
    },

    'shopDaddy.FooterTab': {
      ...footerTabTheme(variables)
    },

    'shopDaddy.ListItem': {
      ...listItemTheme(variables),
      'shopDaddy.CheckBox': {
        marginLeft: -10,
        marginRight: 10
      },
      'shopDaddy.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200'
        },
        alignSelf: 'center'
      }
    },

    'shopDaddy.ListItem1': {
      ...listItemTheme(variables)
    },

    'shopDaddy.Icon': {
      ...iconTheme(variables)
    },
    'shopDaddy.IconNB': {
      ...iconTheme(variables)
    },
    'shopDaddy.Text': {
      ...textTheme(variables)
    },
    'shopDaddy.Spinner': {
      ...spinnerTheme(variables)
    },

    'shopDaddy.Fab': {
      ...fabTheme(variables)
    },

    'shopDaddy.Item': {
      ...itemTheme(variables)
    },

    'shopDaddy.Label': {
      ...labelTheme(variables)
    },

    'shopDaddy.Textarea': {
      ...textAreaTheme(variables)
    },

    'shopDaddy.PickerNB': {
      'shopDaddy.Button': {
        'shopDaddy.Text': {}
      }
    },

    'shopDaddy.Tab': {
      ...tabTheme(variables)
    },

    'shopDaddy.Segment': {
      ...segmentTheme(variables)
    },

    'shopDaddy.STabs': {
      flex: 1
    },

    'shopDaddy.TabBar': {
      ...tabBarTheme(variables)
    },
    'shopDaddy.ViewNB': {
      ...viewTheme(variables)
    },
    'shopDaddy.TabHeading': {
      ...tabHeadingTheme(variables)
    },
    'shopDaddy.TabContainer': {
      ...tabContainerTheme(variables)
    },
    'shopDaddy.Switch': {
      marginVertical: -5
    },
    'shopDaddy.Separator': {
      ...separatorTheme(variables)
    },
    'shopDaddy.Tabs': {},
    'shopDaddy.Thumbnail': {
      '.square': {
        borderRadius: 0
      },
      '.small': {
        width: 36,
        height: 36,
        borderRadius: 18
      },
      '.large': {
        width: 80,
        height: 80,
        borderRadius: 40
      },
      width: 56,
      height: 56,
      borderRadius: 28
    }
  };

  // const cssifyTheme = (grandparent, parent, parentKey) => {
  //   console.log(
  //     'GandParent: ',
  //     grandparent,
  //     'Parent: ',
  //     parent,
  //     'ParentKey: ',
  //     parentKey
  //   );
  //   _.forEach(parent, (style, styleName) => {
  //     console.log('style : ', style, 'styleName : ', styleName);
  //     if (
  //       styleName.indexOf('.') === 0 &&
  //       parentKey &&
  //       parentKey.indexOf('.') === 0
  //     ) {
  //       if (grandparent) {
  //         if (!grandparent[styleName]) {
  //           grandparent[styleName] = {};
  //         } else {
  //           grandparent[styleName][parentKey] = style;
  //           console.log(
  //             'Granparent Style  : ',
  //             grandparent[styleName][parentKey]
  //           );
  //         }
  //       }
  //     }
  //     if (style && typeof style === 'object') {
  //       // console.log('SISIFY :', cssifyTheme(parent, style, styleName) )
  //       cssifyTheme(parent, style, styleName);
  //     }
  //   });
  // };

  // cssifyTheme(null, theme, null);

  return theme;
};

// export {
//   checkBoxTheme,
//    comp 2,
//     compe 3

// }
