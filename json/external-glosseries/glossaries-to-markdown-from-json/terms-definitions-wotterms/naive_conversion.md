## naive conversion

<h4>Definition</h4><p>Non-CESR Base64 conversion. How people are used to using the Base64 encode and decode.  Without <a href="pre-pad">pre-pad</a>ding etc all the stuff CESR does to ensure aligns on 24 bit boundaries so <a href="CESR">CESR</a> never uses the &#39;=&#39; pad character. But naive <a href="base64">Base64</a> will pad if the length is not 24 bit aligned.<br>Source: Samuel Smith in <a href="https://github.com/WebOfTrust/ietf-cesr/issues/34">issue 34</a></p><p>Naive conversion is a text to binary conversion or vice versa that doesn&#39;t anticipate on either <a href="composability">composability</a> and / or on the <a href="concatenation">concatenation</a> capability of the result of such an operation.</p><h4>CESR related</h4><p>In the <a href="https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#conversions">IETF draft CESR</a> there&#39;s much attention for naive <a href="base64">Base64</a> conversions, because it helps explaining the necessity of stable code characters and padding in CESR to achieve:</p><ul><li><a href="self-framing">self-framing</a></li><li>round-robin <a href="composability">composability</a></li><li><a href="concatenation">concatenation</a> options</li><li><a href="pipelining">pipelined</a> streaming</li></ul>
