import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = props => {
    const { title, onChange } = props;
    return (
        <label>
            {title} <br />
            <input
                className={css.filterInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                // value={this.state.name}
                onChange={onChange}
            />
        </label>
    );
};

export default Filter;

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
