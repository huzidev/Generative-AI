import Text from '../components/Text';
import Vision from '../components/Vision';
import { ROUTE_PATHS } from './paths';

export const routes = [
    // {
    //     path: ROUTE_PATHS.HOME,
    //     Component: HomePage
    // },
    {
        path: ROUTE_PATHS.GENERATE_TEXT,
        Component: Text
    },
    {
        path: ROUTE_PATHS.GENERATE_VISION,
        Component: Vision
    },
]