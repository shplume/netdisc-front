import { useIntl } from 'umi';

export function intl(id) {
    return useIntl().formatMessage({id: id})
}