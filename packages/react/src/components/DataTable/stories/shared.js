/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Link from '../../Link';
import Select from '../../Select';
import SelectItem from '../../SelectItem';

export const rows = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevin’s VM Groups',
    status: <Link>Disabled</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureen’s VM Groups',
    status: <Link>Starting</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrew’s VM Groups',
    status: <Link>Active</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
  {
    id: 'd',
    name: 'Load Balancer 6',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Marc’s VM Groups',
    status: <Link>Disabled</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
  {
    id: 'e',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mel’s VM Groups',
    status: <Link>Starting</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
  {
    id: 'f',
    name: 'Load Balancer 5',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Ronja’s VM Groups',
    status: <Link>Active</Link>,
    foo: (
      <Select id="bar" noLabel size="sm">
        <SelectItem value={1} text="1" />
        <SelectItem value={2} text="2" />
      </Select>
    ),
  },
];

export const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'protocol',
    header: 'Protocol',
  },
  {
    key: 'port',
    header: 'Port',
  },
  {
    key: 'rule',
    header: 'Rule',
  },
  {
    key: 'attached_groups',
    header: 'Attached Groups',
  },
  {
    key: 'status',
    header: 'Status',
  },
  {
    key: 'foo',
    header: 'foo',
  },
];

export const initialRowsLarge = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevins VM Groups',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureens VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'd',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'e',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'f',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'g',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'h',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'i',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'j',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'k',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'l',
    name: 'Load Balancer 2',
    protocol: 'HTTPS',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'm',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 8000,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'n',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'o',
    name: 'Load Balancer 2',
    protocol: 'HTTPS',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'p',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'q',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'r',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 's',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 80,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 't',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'None',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'u',
    name: 'Load Balancer 2',
    protocol: 'HTTPS',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'v',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'w',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'x',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'y',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'z',
    name: 'Load Balancer 4',
    protocol: 'HTTPS',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'a1',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'b1',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'c1',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'd1',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
  {
    id: 'e1',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
];

export const batchActionClick = (selectedRows) => () =>
  action('batch action click')(selectedRows);
