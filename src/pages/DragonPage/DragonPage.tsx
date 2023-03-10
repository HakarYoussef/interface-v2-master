import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, useMediaQuery } from '@material-ui/core';
import DragonBg1 from 'assets/images/DragonBg1.svg';
import DragonBg2 from 'assets/images/DragonBg2.svg';
import DragonLairMask from 'assets/images/DragonLairMask.svg';
import DragonAlert from './DragonAlert';
import DragonsLair from './DragonsLair';
import DragonsSyrup from './DragonsSyrup';
import 'pages/styles/dragon.scss';
import { useTranslation } from 'react-i18next';
import AdsSlider from 'components/AdsSlider';

const DragonPage: React.FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('xs'));
  const { t } = useTranslation();
  //showing old dragons lair until we're ready to deploy
  const showOld = true;
  const showNew = true;

  return (
    <Box width='100%' mb={3}>
      <Box width='100%' className='dragonWrapper'>
        <Box className='dragonTitle'>
          <h5>{t('dragonSyrup')}</h5>
          <small>{t('dragonSyrupTitle')}</small>
        </Box>
        <DragonsSyrup />
      </Box>
    </Box>
  );
};

export default DragonPage;
