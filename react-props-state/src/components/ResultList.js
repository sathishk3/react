import ResultShow from "./ResultShow"


function ResultList({results}) {

  return (
    <div>
      <ResultShow name={results.name} count={results.count} age={results.age} />
    </div>
  )
}

export default ResultList;