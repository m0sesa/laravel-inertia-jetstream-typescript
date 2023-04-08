import { AxiosStatic } from 'axios';
import _ from 'lodash';

declare global {
    interface Window {
        axios: AxiosStatic,
        _: typeof _
    }
    interface ImportMeta {
        glob: (path: string) => Record<string, Promise<any>>;
    }
}

