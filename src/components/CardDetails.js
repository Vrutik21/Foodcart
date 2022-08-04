import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DEC, DEL } from "../redux/actions/action";

const CardDetails = () => {
  const [data, setData] = useState([]);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const { id } = useParams();

  const compare = () => {
    let item = getData.filter((e) => {
      return e.id == id;
    });
    setData(item);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dlt = (id) => {
    dispatch(DEL(id));
    history("/");
  };

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const delItem = (item) => {
    // console.log(e);
    dispatch(DEC(item));
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details</h2>

      <section className="container mt-3">
        <div className="itemsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt="itemimg" />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant :</strong> {ele.rname}
                        </p>
                        <p>
                          <strong>Price :</strong> ₹ {ele.price}
                        </p>
                        <p>
                          <strong>Dishes :</strong> {ele.address}
                        </p>
                        <p>
                          <strong>Total :</strong> ₹ {ele.price * ele.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between align-items-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              ele.qnty <= 1
                                ? () => dlt(ele.id)
                                : () => delItem(ele)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(ele)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating : </strong>
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {ele.rating}⭐
                          </span>
                        </p>
                        <p>
                          <strong>Order Review : </strong>
                          <span>{ele.somedata}</span>
                        </p>
                        <p>
                          <strong>Remove : </strong>
                          <span
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i
                              className="fas fa-trash"
                              onClick={() => dlt(ele.id)}
                            ></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
