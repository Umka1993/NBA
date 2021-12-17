import React from 'react';
import s from './players.module.scss';
import { FilterTeams } from '../FilterTeams/FilterTeams';
import { SearchInput } from '../SearchInput/SearchInput';
import { Button } from '../../../../ui/buttons/Button/Button';
import { NavigationFooter } from '../../../../ui/NavigationFooter/NavigationFooter';
import { DefaultBlock } from '../../../../ui/DefaultBlock/DefaultBlock';
import defaultPlayers from 'assets/icon/defaultPlayers.png';
import { NetPlayers } from './NetPlayers/NetPlayers';

export const PlayersComponent = (): JSX.Element => {
  return (
    <div className={s.contentWrap}>
      <div className={s.nav}>
        <SearchInput />
        <FilterTeams />
        <Button> Add +</Button>
      </div>
      <div className={s.blockContent}>
        {/*<DefaultBlock img={defaultPlayers} />*/}
        <NetPlayers />
      </div>

      <NavigationFooter />
    </div>
  );
};
