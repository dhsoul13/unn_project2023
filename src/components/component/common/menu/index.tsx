/* eslint-disable no-alert */
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/reducers/modalreducer';
import { ETypeModal } from 'store/reducers/modalreducer/interface';
import { TMenuForNewsObj } from 'helpers/menu/interface';
import { useNavigate } from 'react-router-dom';
import { IMenuComponent } from './interface';

const MenuComponent: React.FC<IMenuComponent> = ({ data, elem }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {data.length ? (
          <div>
            {data.map((el: TMenuForNewsObj) => (
              <MenuItem
                key={el.id}
                onClick={() => {
                  setAnchorEl(null);

                  if (el.id === 2) {
                    el.function(navigate, elem);
                  } else {
                    el.function(dispatch, elem);
                  }
                }}>
                {el.title}
              </MenuItem>
            ))}
          </div>
        ) : (
          ''
        )}
      </Menu>
    </div>
  );
};

export default MenuComponent;
