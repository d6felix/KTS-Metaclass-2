import React from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import Loader from './components/Loader';
import Card from './components/Card';
import { MultiDropdown, Option, MultiDropdownProps } from './components/MultiDropdown/MultiDropdown';
import './styles/styles.scss';
import { LoaderSize } from './__test__/MockLoader';

const OPTIONS = [
    { key: 'msk', value: 'Moscow' },
    { key: 'spb', value: 'Saint Petersburg' },
    { key: 'ekb', value: 'Ekaterinburg' },
];


export const Default = (props: MultiDropdownProps) => {
    const [value, setValue] = React.useState<Option[]>(Array.isArray(props.value) ? props.value : []);

    return (
        <MultiDropdown
            disabled={props.disabled}
            options={OPTIONS}
            onChange={setValue}
            value={value}
            pluralizeOptions={(values: Option[]) => values.length === 0 ? 'Выберите город' : `Выбрано: ${values.length}`}
        />
    );
};

export const TestPage = () => {
    return (
        <React.Fragment>
            <Loader loading={true} size={LoaderSize.l} />
            <Loader loading={true} size={LoaderSize.m} />
            <Loader loading={true} size={LoaderSize.s} />
            <Button className="button">Find Now</Button>
            <Button className="button" disabled={true}>
                Find Now
            </Button>
            <Button className="button" loading={true}>
                Cancel
            </Button>
            <Input
                value="aaaa"
                onChange={(value) => {
                    /* eslint-disable no-console */
                    console.log(value);
                    /* eslint-enable no-console */
                }}
                className="test"
            />
            <Input
                value="aaaa"
                disabled={true}
                onChange={(value) => {
                    /* eslint-disable no-console */
                    console.log(value);
                    /* eslint-enable no-console */
                }}
                className="test"
            />
            <CheckBox checked={true} onChange={() => { }} />

            <CheckBox onChange={() => { }} />

            <CheckBox disabled onChange={() => { }} />

            <CheckBox disabled checked={true} onChange={() => { }} />

            <MultiDropdown
                options={[
                    { key: 'msk', value: 'Москва' },
                    { key: 'spb', value: 'Санкт-Петербург' },
                    { key: 'ekb', value: 'Екатеринбург' },
                ]}
                value={[
                    { key: 'msk', value: 'Москва' },
                    { key: 'spb', value: 'Санкт-Петербург' },
                    { key: 'ekb', value: 'Екатеринбург' },
                ]}
                onChange={(selected: Option[]) =>
                    /* eslint-disable no-console */
                    console.log('Выбрано:', JSON.stringify(selected))
                    /* eslint-enable no-console */
                }
                pluralizeOptions={(elements: Option[]) =>
                    elements.map((el: Option) => el.key).join(",")
                }
            />
            <Default
                disabled={false}
                options={OPTIONS}
                value={OPTIONS}
                onChange={(e: Option[]) => console.log(e)}
                pluralizeOptions={(values: Option[]) => values.length === 0 ? 'Выберите город' : `Выбрано: ${values.length}`}
            />
            <Card
                image="/logo512.png"
                title="kts-school-frontend"
                subtitle="ktsstudio"
            />
        </React.Fragment>
    );
}