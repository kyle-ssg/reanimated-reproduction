import { describe, it } from 'mocha';
import expect from 'expect';
import jest from 'jest-mock';
import { put, select } from 'redux-saga/effects';
import { startup, getAction, postAction, updateAction, setData } from '../saga';
import '../app-actions';

const API_ = {
    ajaxHandler: () => {
    },
};
global.API = API_;

describe(`saga.${startup.name}()`, () => {
    it('should end with Actions.STARTUP_LOADED action if input action is empty on Server Side, and all goes well', async () => {
        const generator_ = startup({});

        expect(generator_.next().value).toStrictEqual(
            put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline: true } }),
        );

        expect(generator_.next().value).toBeUndefined();
    });
});

describe(`saga.${getAction.name}()`, () => {
    it('Should generate a standard get action', async () => {
        const onSuccess = jest.fn();
        setData({
            get: url => Promise.resolve({ url }),
        });

        const generator_ = getAction({ id: 1, onSuccess }, 'google.com', 'STARTUP');
        const apiResponse = await generator_.next().value;
        expect(apiResponse).toStrictEqual(
            { url: 'google.com' },
        );

        expect(generator_.next(apiResponse).value)
            .toStrictEqual(put({
                data: { url: 'google.com' },
                type: 'STARTUP_LOADED',
                index: 1,
            }));
        generator_.next();
        expect(onSuccess).toHaveBeenCalledTimes(1);
    });
});
