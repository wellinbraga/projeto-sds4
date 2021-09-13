import { SalePager } from "types/sales";

type Props = {
    page: SalePager;
    onPageChanger: Function;
}

const Pagination = ({page, onPageChanger} : Props) => {

    return (
        < div className="row d-flex justify-content-center" >
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : '' } `}>
                        <button className="page-link" onClick= {() => onPageChanger(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number +1}</span>
                    </li>
                    <li className={`page-item ${page.first ? 'disabled' : '' } `}>
                        <button className="page-link" onClick= {() => onPageChanger(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Pagination;