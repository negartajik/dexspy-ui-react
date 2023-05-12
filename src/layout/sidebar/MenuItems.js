import { LivePricingIcon, StackIcon, WrenchScrewdriverIcon } from '../../components';
import routes from '../../config/routes';

export const menuItems = [
    {
      name: 'Recent Launches',
      icon: <LivePricingIcon />,
      path: routes.home,
    },
    {
      name: 'Owner Txs',
      icon: <StackIcon />,
      path: routes.livePricing,
    },
    {
      name: 'Tokens',
      icon: <WrenchScrewdriverIcon />,
      path: routes.farms,
    },
    
  ];
  