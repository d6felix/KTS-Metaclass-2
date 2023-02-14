import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import Loader from './components/Loader';
import { MultiDropdown, Option } from './components/MultiDropdown/MultiDropdown';
import './styles/styles.scss';
import { LoaderSize } from './__test__/MockLoader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Loader loading={true} size={LoaderSize.l} />
    <Loader loading={true} size={LoaderSize.m} />
    <Loader loading={true} size={LoaderSize.s} />
    <Button className="button">Find Now</Button>
    <Button className="button" disabled={true}>
      Find Now
    </Button>
    <Button className="button" loading={true}>
      Find Now
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
    <CheckBox checked={true} onChange={() => { }} />
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
        elements.map((el: Option) => el.key).join()
      }
    />
  </React.StrictMode>
);
