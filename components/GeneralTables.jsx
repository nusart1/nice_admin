import './GeneralTables.css';

const data = [
  { id: 1, name: 'Brandon Jacob', position: 'Designer', age: 28, startDate: '2016-05-25' },
  { id: 2, name: 'Bridie Kessler', position: 'Developer', age: 35, startDate: '2014-12-05' },
  { id: 3, name: 'Ashleigh Langosh', position: 'Finance', age: 45, startDate: '2011-08-12' },
  { id: 4, name: 'Angus Grady', position: 'HR', age: 34, startDate: '2012-06-11' },
  { id: 5, name: 'Raheem Lehner', position: 'Dynamic Division Officer', age: 47, startDate: '2011-04-19' },
];

const Table = ({ className = '', highlightRow = false }) => (
  <table className={`table ${className}`}>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Position</th>
        <th>Age</th>
        <th>Start Date</th>
      </tr>
    </thead>
    <tbody>
      {data.map((person, index) => (
        <tr key={person.id} className={highlightRow && index === 1 ? 'table-active' : ''}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.position}</td>
          <td>{person.age}</td>
          <td>{person.startDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const GeneralTables = () => {
  return (
    <div className="GeneralTables">
      <div className="getab">
        <h2>General Tables</h2>
        <span>Home / Tables / <strong>General</strong></span>
      </div>
      <div className="generalT">
        <div className="general-left">
          <div>
            <h2>Default Table</h2>
            <div><Table /></div>
          </div>
          <div>
            <h2>Dark Table</h2>
            <div><Table className="table-dark" /></div>
          </div>
          <div>
            <h2>Active Table</h2>
            <p>Highlight a table row or cell by adding a <span>.table-active</span> class.</p>
            <div><Table highlightRow /></div>
          </div>
          <div>
            <h2>Tables without borders</h2>
            <p>Add <span>.table-borderless</span> for a table without borders.</p>
            <div><Table className="table-borderless" /></div>
          </div>
          <div>
            <h2>Table Variants</h2>
            <p>Use contextual classes <span>.table-primary .table-secondary .table-success .table-danger .table-warning .table-info .table-light .table-dark</span> to color tables, rows or individual cells.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Heading</th>
                  <th>Heading</th>
                </tr>
              </thead>
              <tbody>
                {['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant, i) => (
                  <tr key={i} className={variant ? `table-${variant}` : ''}>
                    <td>{variant || 'Default'}</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="general-right">
          <div>
            <h2>Table with stripped rows</h2>
            <div><Table className="table-striped" /></div>
          </div>
          <div>
            <h2>Table with hoverable rows</h2>
            <div><Table className="table-hover" /></div>
          </div>
          <div>
            <h2>Bordered Table</h2>
            <p>Add <span>.table-bordered</span> for borders on all sides of the table and cells.</p>
            <div><Table className="table-bordered" /></div>

            <p><strong>Border color utilities</strong> can be added to change colors:</p>
            <div><Table className="table-bordered border-primary" /></div>
          </div>
          <div>
            <h2>Small tables</h2>
            <p>Add <span>.table-sm</span> to make any <span>.table</span> more compact by cutting all cell padding in half.</p>
            <div><Table className="table-sm" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralTables;
