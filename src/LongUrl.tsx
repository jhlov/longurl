import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  Spinner,
  Table
} from "react-bootstrap";

interface Data {
  label: string;
  data: string;
}

const LongUrl = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [data, setData] = useState<Data[] | null>(null);
  const [loding, setLoding] = useState<boolean>(false);

  const onChangeInput = (event: any) => {
    setShortUrl(event.target.value);
  };

  const onClickExpandButton = async () => {
    let url = shortUrl.trim();
    if (!url) {
      return;
    }

    if (url.startsWith("bit.ly")) {
      url = "https://" + url;
    }

    setLoding(true);
    setData(null);

    try {
      const res = await axios.get(
        "https://yqxmo2x8z4.execute-api.ap-northeast-2.amazonaws.com/default/long-url?url=" +
          url
      );

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  };

  return (
    <div className="long-url">
      <h1 className="my-5">단축 url 복원</h1>

      <InputGroup size="lg" className="mb-1">
        <FormControl
          placeholder="복원할 단축 url을 입력하세요."
          onChange={onChangeInput}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={onClickExpandButton}>
            복원
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <p>(bit.ly, url.kr, han.gl)</p>

      {loding && (
        <div className="mt-5">
          <Spinner animation="border" />
        </div>
      )}

      {data !== null && (
        <div className="mt-5">
          <Table striped bordered size="lg">
            <tbody>
              {data.map(e => (
                <tr>
                  <td>{e.label}</td>
                  <td>{e.data}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LongUrl;
