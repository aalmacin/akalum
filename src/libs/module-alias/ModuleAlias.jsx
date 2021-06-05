import React from 'react';
import { ModuleAliasChild } from './ModuleAliasChild';

require('module-alias/register');

export const ModuleAlias = () => (
  <div>
    Alias Component
    <ModuleAliasChild />
  </div>
);
