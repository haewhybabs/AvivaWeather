import React from 'react';
import { ImageSourcePropType, ImageStyle,StyleSheet } from 'react-native';

interface AppIcons {
  umbrella: {
    source: ImageSourcePropType;
    style: ImageStyle;
  };
  humidity:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  wind:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  cloudy:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  clouds:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  cloud:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  sun:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  placeholder:{
    source:ImageSourcePropType;
    style:ImageStyle;
  };
  zoom:{
    source:ImageSourcePropType;
    style:ImageStyle;
  }
  cheveronLeft:{
    source:ImageSourcePropType;
    style:ImageStyle;
  }
  cheveronRight:{
    source:ImageSourcePropType;
    style:ImageStyle;
  }
  close:{
    source:ImageSourcePropType;
    style:ImageStyle;
  }
}
const styles= StyleSheet.create({
    icon:{  height:20,width:20,resizeMode:'contain',paddingVertical:10 },
    cloudy:{
        height:100,
        width:100,
        resizeMode:'contain'
    },
    clouds:{
        height:30,
        width:30,
        resizeMode:'contain',
    },
    cloud:{
        height:200,
        width:200,
        resizeMode:'contain'
    },
    placeholder:{
        width:19,
        height:19,
        resizeMode:'contain'
    },
    zoom:{
      width:30,
      height:30,
      resizeMode:'contain',
    },
    cheveron:{
      width:25,
      height:25,
      resizeMode:'contain',
    }
})

const appIcons: AppIcons = {
  umbrella: {
    source: require('../assets/images/umbrella.png'),
    style: styles.icon,
  },
  humidity:{
    source:require('../assets/images/humidity.png'),
    style:styles.icon
  },
  wind:{
    source:require('../assets/images/wind.png'),
    style:styles.icon
  },
  cloudy:{
    source:require('../assets/images/cloudy.png'),
    style:styles.cloudy
  },
  clouds:{
    source:require('../assets/images/clouds.png'),
    style:styles.clouds
  },
  cloud:{
    source:require('../assets/images/cloud.png'),
    style:styles.cloud
  },
  sun:{
    source:require('../assets/images/sun.png'),
    style:styles.clouds
  },
  placeholder:{
    source:require('../assets/images/placeholder.png'),
    style:styles.placeholder
  },
  zoom:{
    source:require('../assets/images/zoom.png'),
    style:styles.zoom
  },
  cheveronLeft:{
    source:require('../assets/images/left-cheveron-dark.png'),
    style:styles.cheveron
  },
  cheveronRight:{
    source:require('../assets/images/right-cheveron-dark.png'),
    style:styles.cheveron
  },
  close:{
    source:require('../assets/images/close.png'),
    style:styles.cheveron
  }
};



export default appIcons;
