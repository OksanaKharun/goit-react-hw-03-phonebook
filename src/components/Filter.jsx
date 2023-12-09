export const Filter = ({ value, filterContacts }) => {
  return (
    <div className="filter">
      <label >
        Find contacts by name
        <input
          
          type="text"
          name="filter"
          value={value}
          onChange={filterContacts}
        />
      </label>
    </div>
  );
};
