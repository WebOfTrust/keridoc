## revocation

<h4>Definition</h4><p>Revocation is the act of <a href="https://en.wiktionary.org/wiki/recall">recall</a> or <a href="https://en.wikipedia.org/wiki/Annulment">annulment</a>. It is the cancelling of an act, the recalling of a grant or privilege, or the making <a href="https://en.wikipedia.org/wiki/Void_(law)">void</a> of some <a href="https://en.wikipedia.org/wiki/Deed">deed</a> previously existing.<br>More on source <a href="https://en.wikipedia.org/wiki/Revocation">Wikipedia</a></p><h4>In identity</h4><p>The term revocation has two completely different meanings in the identity space. In key management one may speak of revoking keys. With statement issuance, authorization issuance, or credential issuance, one may speak of revoking an authorization statement, a token, or a credential.<br>This becomes confusing when the act of revoking keys also implicitly revokes the <a href="authorization">authorization</a> of statements signed with those keys. Any statement may be effectively authorized by virtue of the attached signature(s) made with a set of <a href="authoritative">authoritative</a> keys. The statement itself may be authorizing some other function in the system. So, the verification of the signature on an authorizing statement is essential to determining the authoritativeness of the associated authorized function. To clarify when an authorization is conveyed via a signed statement, the signature acts to authorize the statement.</p><h4>How KERI avoids confusion</h4><p>KERI terminology usually avoids confusion between <a href="rotation">rotation</a> and revocation because a key rotation operation is the equivalent of a key revocation operation <strong>followed by a key replacement operation</strong>. So one operation, rotate, is implemented instead of two operations (revoke and replace).<br><strong>A bare key revocation is indicated by replacement with a null key.</strong> So only one operation is needed, that is, rotate where a special case of rotation is to rotate to a null key.</p><h4>Also see</h4><p><a href="revocation-event">Revocation event</a></p>
